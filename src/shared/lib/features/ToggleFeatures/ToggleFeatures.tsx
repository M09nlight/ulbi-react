import { ReactElement } from 'react';
import { FeatureFlags } from '../../../types/featureFlags';
import { getFeatureFlags } from '../setGetFeatures';

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

const ToggleFeatures = (props: ToggleFeaturesProps) => {
  const { feature, off, on } = props;

  if (getFeatureFlags(feature)) {
    return on;
  }
  return off;
};

export default ToggleFeatures;
