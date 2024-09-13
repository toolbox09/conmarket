
/**
 * 
 * @param existingNames 
 * @param newName 
 * @returns 
 * @example
 * let names: string[] = ['file', 'file (1)', 'file (2)'];
 * let newName = generateUniqueName(names, 'file');
 * console.log(newName);
 */
export function uniqName(existingNames: string[], newName: string): string {
    let counter = 1;
    let uniqueName = newName;

    while (existingNames.includes(uniqueName)) {
        uniqueName = `${newName} (${counter})`;
        counter++;
    }

    return uniqueName;
}
