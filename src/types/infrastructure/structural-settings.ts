export interface IStructuralSettings {
  domain: {
    lSystem: string;
    geometry: {
      local: string;
      shape: string;
    }
  }

  application: {
    stack: string;
    interpreter: string;
    rangeInputApp: string;
  }

  adapters: {
    dom: string;
    graphics: {
      context: string;
      drawer: string;
    }
  }

  infrastructure: {
    random: string;
  }

  launchingApp: string;
}
