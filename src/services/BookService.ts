import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Book } from "../models/Book";

@Service()
export class BookService {
  @Inject(Book)
  private bookModel: MongooseModel<Book>;

  async getAllBooks(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async getBookById(id: string): Promise<Book | null> {
    return this.bookModel.findById(id).exec();
  }

  async createBook(book: Book): Promise<Book> {
    const newBook = new this.bookModel(book);
    return newBook.save();
  }

  async updateBook(id: string, book: Book): Promise<Book | null> {
    return this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec();
  }

  async deleteBook(id: string): Promise<void> {
    await this.bookModel.findByIdAndDelete(id).exec();
  }
}