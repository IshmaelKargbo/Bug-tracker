import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};

export interface AuthConfig {
  clientID: string;
  secret: string;
  callback: string;
}

export interface AppConfig {
  secret: string;
  session: string;
  port: string;
}
