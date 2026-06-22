import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">
          VANTAGE
        </p>
        <h1>
          Build.
          <br />
          Create.
          <br />
          Grow.
        </h1>
        <p className="subtitle">
          Building communities in Web3, developing digital products, and creating traditional artworks.
        </p>
        <div className="buttons">
          <button>
            Explore Work
          </button>
          <button>
            Contact
          </button>
        </div>
      </div>

      <div className="hero-image">
        <div className="logo-bg">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={600}
            height={600}
          />
        </div>
        <Image
          src="/images/profile.png"
          alt="Vantage"
          width={400}
          height={500}
          className="profile"
        />
      </div>
    </section>
  )
}
