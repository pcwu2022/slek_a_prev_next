import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
        <div className="welcome_block_block">
            <div className="welcome_block">
                <img src="slek.svg" />
                <Link href="/question">Welcome!</Link>
            </div>
        </div>
    </div>
  )
}
