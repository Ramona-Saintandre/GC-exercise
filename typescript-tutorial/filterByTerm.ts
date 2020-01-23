
// https://dev.to/valentinogagliardi/typescript-tutorial-for-beginners-the-missing-guide-part-1-52hj
interface ILink {
  description?: string;
  id?: number;
  url: string;
}
interface IPost extends ILink {
  title: string;
  body: string;
}
const post1: IPost = {
  description:
    "TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...",
  id: 1,
  url: "www.valentinog.com/typescript/",
  title: "TypeScript tutorial for beginners",
  body: "Some stuff here!"
};

function filterByTerm(input: Array<ILink>, searchTerm: string) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("input cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return input.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}

const obj1: ILink = { url: "string1" };
const obj2: ILink = { url: "string2" };
const obj3: ILink = { url: "string3" };

const arrOfLinks: Array<ILink> = [obj1, obj2, obj3];

const term: string = "java";

filterByTerm(arrOfLinks, term);