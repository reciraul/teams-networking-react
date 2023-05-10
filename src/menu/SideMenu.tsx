export function SideMenu() {
  return (
    <div id="side-menu">
      <section>
        <form action="" method="get">
          <label htmlFor="userEmail">Email:</label>
          <input type="email" name="email" id="userEmail" placeholder="example@me.com" required />

          <button type="submit">Subscribe</button>
        </form>
      </section>
      <section>M2</section>
    </div>
  );
}
