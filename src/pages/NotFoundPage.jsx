import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return <div className="">
    <Link to="/" className="">
      <button className="absolute top-2/1 left-1/2 ">Нажми экран</button>
      <img className="w-screen h-screen" src="https://webartdevelopers.com/blog/wp-content/uploads/2021/05/404-error-page-svg-animation.gif" alt="img" />
    </Link>
  </div>
}