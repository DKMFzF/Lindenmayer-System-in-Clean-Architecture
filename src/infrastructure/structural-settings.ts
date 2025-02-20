import { IStructuralSettings } from "@/types/infrastructure/structural-settings";

export const STRUCTURAL_SETTINGS: IStructuralSettings = {
  domain: {
    lSystem: 'ISystemBuilder',
    geometry: {
      local: 'IStartSelector',
      shape: 'IShapeBuilder',
    }
  },

  application: {
    stack: 'JointsStack',
    interpreter: 'SystemInterpreter',
    rangeInputApp: 'IRangeInputApp'
  },

  adapters: {
    dom: 'ElementSource',
    graphics: {
      context: 'CanvasContextProvider',
      drawer: 'Drawer'
    }
  },

  infrastructure: {
    random: 'RandomSource'
  },

  launchingApp: 'Application'
}
