import { getFeatureFlag, setFeatureFlags } from './lib/setGetFeatures';
import { toggleFeatures } from './lib/toggleFeatures';
import { updateFeatureFlag } from './services/updateFeatureFlags';
import { ToggleFeatures } from './components/ToggleFeatures/ToggleFeatures';

export { getFeatureFlag, setFeatureFlags };
export { toggleFeatures, ToggleFeatures, updateFeatureFlag };
