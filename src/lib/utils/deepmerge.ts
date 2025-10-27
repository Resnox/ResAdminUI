/**
 * Fusionne deux objets de manière profonde (deep merge)
 * @param target - L'objet de destination
 * @param source - L'objet source
 * @returns L'objet fusionné
 */
export function deepMerge<T extends Record<string, any>>(
    target: T,
    source: Partial<T>
): T {
    const result = { ...target };

    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            const sourceValue = source[key];
            const targetValue = result[key];

            if (
                sourceValue &&
                typeof sourceValue === 'object' &&
                !Array.isArray(sourceValue) &&
                targetValue &&
                typeof targetValue === 'object' &&
                !Array.isArray(targetValue)
            ) {
                // Fusion récursive pour les objets
                result[key] = deepMerge(targetValue, sourceValue);
            } else {
                // Remplacement direct pour les autres types
                result[key] = sourceValue as T[Extract<keyof T, string>];
            }
        }
    }

    return result;
}