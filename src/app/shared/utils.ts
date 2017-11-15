/**
 * Sorts an array based on the property name passed in.
 * By default will sort upper case alphabetically, followed by lower case alphabetically.
 * Set {caseSensitive} to false to ignore the case when sorting.
 * @example
 * const people = [
 *  {name: 'AAAA', surname: 'BBBBBBBBBB'},
 *  {name: 'CCCC', surname: 'DDDDDDDDDD'},
 *  {name: 'EEEE', surname: 'FFFFFFFFFF'},
 *  {name: 'GGGG', surname: 'HHHHHHHHHH'}
 * ];
 * people.sort(Utils.dynamicSort('name'));
 * people.sort(Utils.dynamicSort('-surname'));
 * @param property
 * @param {boolean} [caseSensitive]
 * @returns {(a:any, b:any)=>number}
 */
export function dynamicSort(property: string, caseSensitive: boolean = true): any {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  if (!caseSensitive) {
    return (a, b) => {
      const result =
        (a[property].toLowerCase() < b[property].toLowerCase()) ? -1 :
          (a[property].toLowerCase() > b[property].toLowerCase()) ? 1 : 0;
      return result * sortOrder;
    };
  }
  return (a, b) => {
    const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  };
}
