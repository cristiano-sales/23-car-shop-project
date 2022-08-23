interface IService<T> {
  create(obj:T):Promise<T>,
  findAll: () => Promise<Array<T>>,
}

export default IService;
