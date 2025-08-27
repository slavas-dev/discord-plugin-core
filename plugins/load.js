const fs = require('fs'), path = require('path');
const { info, error, colors } = require('../console-log');

function loadPlugin(pluginPath, relativePath, client) {
    try {
        const plugin = require(pluginPath);
        if (typeof plugin === 'function') {
            plugin(client, colors), info(path.basename(__filename), `${relativePath} loaded`);
        } else {
            error(path.basename(__filename), `${relativePath} is not a valid plugin`);
        }
    } catch (err) {
        error(path.basename(__filename), `${relativePath} failed - ${err.message}`);
    }
}

function scanDirectory(dirPath, prefix, client) {
    fs.readdirSync(dirPath, { withFileTypes: true }).forEach(dirent => {
        const fullPath = path.join(dirPath, dirent.name);
        if (dirent.isDirectory()) {
            const indexPath = path.join(fullPath, 'index.js');
            if (fs.existsSync(indexPath)) {
                loadPlugin(indexPath, path.posix.join(prefix, dirent.name, 'index.js'), client);
            }
            scanDirectory(fullPath, path.posix.join(prefix, dirent.name), client);
        } else if (dirent.isFile() && dirent.name === 'index.js' && !prefix) {
            loadPlugin(fullPath, dirent.name, client);
        }
    });
}

function initializePlugins(client) {
    const pluginsDir = path.join(__dirname);
    fs.existsSync(pluginsDir) ? scanDirectory(pluginsDir, '', client) : (fs.mkdirSync(pluginsDir), info(path.basename(__filename), 'created plugins directory'));
}

module.exports = initializePlugins;