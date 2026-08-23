import type { FeatureManifest, FeatureNavigationItem } from './feature';

type FeatureModule = { default: FeatureManifest };

const modules = import.meta.glob<FeatureModule>('../features/*/index.ts', { eager: true });
const manifests = Object.values(modules)
  .map((module) => module.default)
  .sort((left, right) => left.order - right.order);
const duplicateIds = manifests.map(({ id }) => id).filter((id, index, ids) => ids.indexOf(id) !== index);

if (duplicateIds.length > 0) throw new Error(`Duplicate feature manifests: ${duplicateIds.join(', ')}`);

export const featureRoutes = manifests.flatMap(({ routes }) => routes);
export const featureNavigation: FeatureNavigationItem[] = manifests.flatMap(({ navigation }) => navigation);
