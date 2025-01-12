import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface ActionKanbanSettings {
  mySetting: string;
}

const DEFAULT_SETTINGS: ActionKanbanSettings = {
  mySetting: 'default'
}

export default class ActionKanban extends Plugin {
  settings: ActionKanbanSettings = DEFAULT_SETTINGS;

  async onload(): Promise<void> {
    await this.loadSettings();

    // This adds a settings tab so the user can configure various aspects of the plugin
    this.addSettingTab(new ActionKanbanSettingsTab(this.app, this));
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class ActionKanbanSettingsTab extends PluginSettingTab {
  plugin: ActionKanban;

  constructor(app: App, plugin: ActionKanban) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    new Setting(containerEl)
      .setName('Setting #1')
      .setDesc('It\'s a secret')
      .addText(text => text
        .setPlaceholder('Enter your secret')
        .setValue(this.plugin.settings.mySetting)
        .onChange(async (value) => {
          this.plugin.settings.mySetting = value;
          await this.plugin.saveSettings();
        }));
  }
}