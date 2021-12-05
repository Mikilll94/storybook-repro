import './page.css';

export const createPage = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const section = `
  <section class="repro-wrapper">
    <div class="repro-grid">
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper ex sed ligula elementum facilisis. Pellentesque convallis, dui eu pharetra scelerisque, purus nisi varius odio, ut semper eros purus at lectus. Aenean quis vulputate lectus. Aliquam ultrices ac quam dapibus pretium. Aenean fermentum sem vitae erat volutpat varius. Ut ultrices purus erat, vitae facilisis diam tincidunt accumsan. Nullam non erat leo. Aliquam rhoncus mollis magna eu porta. Ut neque erat, laoreet et augue in, suscipit efficitur nisi. Morbi ultrices sem id dapibus accumsan. Nulla luctus purus sem. Morbi volutpat auctor diam, sit amet volutpat diam accumsan sed. Sed auctor magna quis dignissim ultrices. Cras mattis tincidunt lacus vehicula interdum. Vestibulum sed ornare felis.

      Curabitur rutrum tempor lectus eget efficitur. Nunc cursus vel libero id venenatis. Nulla sem ex, posuere id elit sit amet, tincidunt tincidunt lectus. Vivamus suscipit, velit vel elementum tristique, purus arcu dapibus mauris, sit amet fringilla ipsum enim a ante. Morbi felis lacus, facilisis eget aliquet vitae, commodo ac enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in odio sed metus dignissim placerat vel vitae est.
      
      Cras eu tortor tortor. Sed dapibus et leo at ultrices. Nulla in vestibulum lacus. Fusce id lobortis purus. Quisque dolor urna, congue at elit non, feugiat vulputate quam. Proin finibus placerat odio. Sed vitae consectetur nunc. Nunc condimentum varius lacus id egestas. Suspendisse tristique porttitor lacus non scelerisque. Vestibulum dui dui, condimentum eget semper pretium, cursus at mauris. Nullam lobortis purus ac ullamcorper lacinia. Maecenas vehicula mi in orci suscipit, eget congue mi consectetur. Nulla eu pharetra ipsum. Aliquam a mi eu libero lobortis luctus eget sed arcu.
      
      </div>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper ex sed ligula elementum facilisis. Pellentesque convallis, dui eu pharetra scelerisque, purus nisi varius odio, ut semper eros purus at lectus. Aenean quis vulputate lectus. Aliquam ultrices ac quam dapibus pretium. Aenean fermentum sem vitae erat volutpat varius. Ut ultrices purus erat, vitae facilisis diam tincidunt accumsan. Nullam non erat leo. Aliquam rhoncus mollis magna eu porta. Ut neque erat, laoreet et augue in, suscipit efficitur nisi. Morbi ultrices sem id dapibus accumsan. Nulla luctus purus sem. Morbi volutpat auctor diam, sit amet volutpat diam accumsan sed. Sed auctor magna quis dignissim ultrices. Cras mattis tincidunt lacus vehicula interdum. Vestibulum sed ornare felis.

  Curabitur rutrum tempor lectus eget efficitur. Nunc cursus vel libero id venenatis. Nulla sem ex, posuere id elit sit amet, tincidunt tincidunt lectus. Vivamus suscipit, velit vel elementum tristique, purus arcu dapibus mauris, sit amet fringilla ipsum enim a ante. Morbi felis lacus, facilisis eget aliquet vitae, commodo ac enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in odio sed metus dignissim placerat vel vitae est.

  Cras eu tortor tortor. Sed dapibus et leo at ultrices. Nulla in vestibulum lacus. Fusce id lobortis purus. Quisque dolor urna, congue at elit non, feugiat vulputate quam. Proin finibus placerat odio. Sed vitae consectetur nunc. Nunc condimentum varius lacus id egestas. Suspendisse tristique porttitor lacus non scelerisque. Vestibulum dui dui, condimentum eget semper pretium, cursus at mauris. Nullam lobortis purus ac ullamcorper lacinia. Maecenas vehicula mi in orci suscipit, eget congue mi consectetur. Nulla eu pharetra ipsum. Aliquam a mi eu libero lobortis luctus eget sed arcu.
      </div>
  </section>
`;

  return section;
};
