import { Controller, Get, Post, Put, Delete, BodyParams, PathParams } from "@tsed/common";
import { Returns, Summary } from "@tsed/schema";
import { Book } from "../../models/Book";
import { BookService } from "../../services/BookService";

@Controller("/books")
export class BookController {
  constructor(private bookService: BookService) {}

  @Get("/")
  @Summary("Get all books")
  @Returns(200, Array).Of(Book)
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.getAllBooks();
  }

  @Get("/:id")
  @Summary("Get a book by ID")
  @Returns(200, Book)
  async getBookById(@PathParams("id") id: string): Promise<Book | null> {
    return this.bookService.getBookById(id);
  }

  @Post("/")
  @Summary("Create a new book")
  @Returns(201, Book)
  async createBook(@BodyParams() book: Book): Promise<Book> {
    return this.bookService.createBook(book);
  }

  @Put("/:id")
  @Summary("Update a book by ID")
  @Returns(200, Book)
  async updateBook(@PathParams("id") id: string, @BodyParams() book: Book): Promise<Book | null> {
    return this.bookService.updateBook(id, book);
  }

  @Delete("/:id")
  @Summary("Delete a book by ID")
  async deleteBook(@PathParams("id") id: string): Promise<void> {
    await this.bookService.deleteBook(id);
  }
}