# Discord Plugin Core

Discord bot with plugins architecture.

## Features

- 🔌 **Plugin System** - Modular plugin architecture
- 📊 **Advanced Logging** - Console and file logging with colors
- ⚙️ **Easy Configuration** - JSON-based plugin configuration

## Project Structure

```
src/
├── app.js              # Main application entry point
├── console-log.js      # Logging system
├── plugins/            # Plugin system
└── logs/               # Application logs
```

## Quick Start

1. **Clone Repository**
   ```bash
   git clone https://github.com/slavas-dev/discord-plugin-core.git
   cd discord-plugin-core
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create `.env` file with content:
   ```env
   DISCORD_TOKEN=your_discord_bot_token
   CLEAR_LOGS_ON_START=true
   ```

4. **Configuration**
   Configure plugins in their respective config files

5. **Run Bot**
   ```bash
   node app.js
   ```

## Plugin Development

- **Modular Design**: Each plugin is self-contained
- **Automatic Loading**: Plugins are loaded automatically on startup
- **Error Handling**: Built-in error handling and logging
- **Configuration**: JSON-based configuration per plugin

## Core Technologies

- **Node.js** - Runtime environment
- **Discord.js v14** - Discord API wrapper
- **Modular Architecture** - Plugin-based system
- **File Logging** - Persistent log storage

## Links

- 🌐 **Website**: https://slavas.dev
- 💬 **Discord Server**: https://discord.gg/HjWKegk6tc
- 🔧 **GitHub**: https://github.com/slavas-dev

## Author

slavas.dev