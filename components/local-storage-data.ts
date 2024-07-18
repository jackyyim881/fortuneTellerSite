export function LocalStorage(dataToStore: {
  date1: string;
  time1: string;
  date2: string;
  time2: string;
}) {
  const LocalStorageData = (key: string, value: string) => {
    return localStorage.setItem(key, value);
  };
}
