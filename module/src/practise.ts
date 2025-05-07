{
  // never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("mushkil se error hogaya"); // Execution stops here
}
