// @flow
import Pace from 'pace-progress';

const waitLoading = (timeout: number = 3000): Promise<any> => {
  const timeoutPromise = new Promise(resolve => setTimeout(() => resolve(), timeout));
  const loadPromise = new Promise(resolve => Pace.on('done', () => resolve()));
  Pace.start();
  return Promise.race([timeoutPromise, loadPromise]);
};

export default waitLoading;
