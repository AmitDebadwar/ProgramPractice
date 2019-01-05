import { TestScenariosModel } from './test-scenarios-model';

export interface SmokeTestMainModel {
    applicationName : String;
    applicationUrl : string;

    scenarios : TestScenariosModel[]


}
