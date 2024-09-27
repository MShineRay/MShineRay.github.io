# typescript

## 优缺点
- 优点
  - TypeScript 向 JavaScript 添加了额外的语法，以支持与你的编辑器更紧密的集成。 在编辑器中尽早发现错误。 
  - TypeScript 代码转换为 JavaScript，它在 JavaScript 运行的任何地方运行：在浏览器中、在 Node.js 或 Deno 上以及在你的应用程序中。
  - TypeScript 理解 JavaScript 并使用类型推断为你提供出色的工具，而无需额外的代码。
  - 提升项目的可维护性
- 缺点
  - 影响开发速度
  - 项目代码体积变大
  - 编译时间变长
  - 类型编程污染代码
  - 思维转变：弱类型 转 强类型

## 参考资料
- [Typescript 英文文档](https://www.typescriptlang.org/docs/)
  - [TypeScript 中文文档](https://ts.nodejs.cn/)

## 实现Optional

将部分类型变成可选

```ts
// 优化前：
interface Article{
  title: string;
  content: string;
  author: string;
  date: Date;
  readCount: number;
}

interface CreateArticleOptions{
  title: string;
  content: string;
  author?: string;// ?: 可选项
  date?: Date;
  readCount?: number;
}

function createArticle(options: CreateArticleOptions){
  // ...
}
```

```ts
interface Article{
  title: string;
  content: string;
  author: string;
  date: Date;
  readCount: number;
}

// 优化后：
type Optional<T, K extends  keyof T> = Omit<T,K> & Partial<Pick<T,K>>;

type CreateArticleOptions = Optional<Article, 'author' | 'date' | 'readCount'>;

function createArticle(options: CreateArticleOptions){
  // ...
}
```

### 参考资料
- [Partial TS Docs](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)
- [Omit TS Docs](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)
- [Pick TS Docs](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)
