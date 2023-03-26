export interface Comic {
  id: string;
  title: string;
  creators: {
    items: [
      {
        name: string;
        resourceURI: string;
        role: string;
      }
    ];
  };
  thumbnail: {
    path: string;
    extension: string;
  };
  prices: [
    {
      price: number;
    }
  ];
  description: string;
}
