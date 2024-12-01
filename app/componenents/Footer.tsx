const Footer = () => (
  <footer className="bg-slate-500 w-full h-32 fixed bottom-0 flex justify-between p-6">
    <div>
      <p>&copy; Paul Blackmore</p>
      {/* <div>Socials go here</div> */}
    </div>
    <div>
      <h2 className="font-semibold">Other resources</h2>
      <ul>
        <li className="text-sm">News</li>
        <li className="text-sm">Events</li>
        <li className="text-sm">Blog</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
