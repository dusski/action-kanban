import { Plugin } from 'obsidian';

interface ActionKanbanSettings {
  mySetting: string;
}

const DEFAULT_SETTINGS: ActionKanbanSettings = {
  mySetting: 'default'
}

export default class ActionKanban extends Plugin {
  settings: ActionKanbanSettings = DEFAULT_SETTINGS;

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}