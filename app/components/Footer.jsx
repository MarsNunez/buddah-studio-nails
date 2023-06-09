const Footer = () => {
  return (
    <footer className="bg-[#e1ae3e] text-[#111] pb-7">
      <div>
        <img src="/img/footer.png" alt="footer image" className="w-full" />
      </div>
      <div className="flex mx-auto w-fit mb-8 text-4xl gap-9">
        <i className="lni lni-facebook-oval cursor-pointer"></i>
        <i className="lni lni-twitter-fill cursor-pointer"></i>
        <i className="lni lni-instagram-fill cursor-pointer"></i>
      </div>
      <div className="text-center font-semibold">
        <ul className="flex gap-10 mx-auto w-fit">
          <li className="cursor-pointer hover:underline">Terms of Use</li>
          <li className="cursor-pointer hover:underline">Support</li>
          <li className="cursor-pointer hover:underline">Marketing</li>
        </ul>
        <p className="my-4">All rights reserved ©</p>
        <p>Made with 💚</p>
      </div>
    </footer>
  );
};

export default Footer;
