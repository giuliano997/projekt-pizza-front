import React from "react";
import pizzaImage from "../assets/pizza.png"; // Platzhalterbild für die Pizzen

function Home() {
  return (
    <div>
      <header>
        <h1>Margarita Madness</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Über Uns</a>
            </li>
            <li>
              <a href="/menu">Menü</a>
            </li>
            <li>
              <a href="/contact">Kontakt</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <img src={historyImage} alt="Unsere Geschichte" />
          <h2>Unsere Geschichte</h2>
          <p>
            Willkommen bei Margarita Madness! Entdecke unsere Geschichte:
            Willkommen bei Margarita Madness, der Pizzeria, die aus einer
            Leidenschaft für authentische italienische Küche entstanden ist.
            Unsere Geschichte begann vor Jahren, als unser Gründer, Luigi, von
            einer unvergesslichen Reise nach Neapel zurückkehrte, der Heimat der
            berühmten Pizza Margherita. Inspiriert von der Einfachheit und dem
            Geschmack dieses Klassikers beschloss er, seine eigene Pizzeria zu
            eröffnen, um die traditionelle Kunst der Pizzaherstellung mit der
            Welt zu teilen. Seitdem hat sich Margarita Madness zu einem
            beliebten Treffpunkt für Liebhaber guter Pizza und gemütlicher
            Atmosphäre entwickelt.
          </p>
        </section>

        <section>
          <img src={pizzaImage} alt="Unsere Pizzen" />
          <h2>Unsere Pizzen</h2>
          <p>
            Einheitliche Größe, überragender Geschmack, bequeme Lieferung: Bei
            Margarita Madness legen wir Wert auf Qualität und Konsistenz.
            Deshalb haben alle unsere Pizzen eine einheitliche Größe von 34 cm
            Umfang, um sicherzustellen, dass jede Pizza denselben überragenden
            Geschmack bietet, den unsere Kunden lieben. Und das Beste daran? Du
            kannst die köstliche Pizza von Margarita Madness bequem zu dir nach
            Hause liefern lassen und den Geschmack unserer Spezialitäten im
            Komfort deines eigenen Zuhauses genießen.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Margarita Madness. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default Home;
