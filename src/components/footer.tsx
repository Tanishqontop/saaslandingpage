import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-4 pb-4">
      <div className="flex flex-row justify-between">
        <ul className="flex flex-row gap-4">
          <li className="dark:text-muted-foreground dark:hover:text-foreground cursor-pointer">
            Built using Next.js 15
          </li>
         
          
           
        </ul>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Crafted by{" "}
          <Link href="https://www.linkedin.com/in/tanishqpratap/" className="font-semibold text-foreground">Tanishq Pratap</Link>
        </p>
      </div>
    </footer>
  );
}
