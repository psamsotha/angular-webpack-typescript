import * as angular from 'angular';


export const ellipsesFilter = () => (text: string, max: number = 30) => {
  return !angular.isString(text)
            ? text
            : text.length > max
                ? text.substring(0, max) + '...'
                : text;
}
