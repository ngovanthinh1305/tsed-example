import { Model, ObjectID } from "@tsed/mongoose";
import { Default, Enum, Property, Required } from "@tsed/schema";

enum Genre {
  Fiction = "Fiction",
  NonFiction = "Non-Fiction",
  Mystery = "Mystery",
  Thriller = "Thriller",
  Romance = "Romance",
}

@Model({ name: "books" })
export class Book {
  @ObjectID("id")
  _id: string;

  @Property()
  @Required()
  title: string;

  @Property()
  @Required()
  author: string;

  @Enum(Genre)
  @Default(Genre.Fiction)
  genre: Genre;

  @Property()
  @Required()
  price: number;
}