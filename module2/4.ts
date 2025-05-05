{
  //

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      realeaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type SmartWatch = {
    brand: string;
    reYear: number;
  };

  const poorDeveloper: Developer<SmartWatch> = {
    name: "irfan",
    computer: {
      brand: "HP",
      model: "ABK",
      realeaseYear: 2017,
    },
    smartWatch: {
      brand: "Apple",
      reYear: 2012,
    },
  };

  interface YamahaBike {
    model: string;
    cap: string;
  }

  const richDeveloper: Developer<SmartWatch, YamahaBike> = {
    name: "irfan",
    computer: {
      brand: "HP",
      model: "ABK",
      realeaseYear: 2017,
    },
    smartWatch: {
      brand: "Apple",
      reYear: 2012,
    },
    bike: {
      model: "Yamaha",
      cap: "100cc",
    },
  };

  //
}
