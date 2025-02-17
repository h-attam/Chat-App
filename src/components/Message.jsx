import { auth } from "../firebase";

const Message = ({ data }) => {
  // eğer mesajı bu cihazda oturumu açık olan kullanıcı attıysa > mesaj içeiriğini
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  // farklı kullanıcı attıysa > mesaj içeriği + kullanıcı
  return (
    <div className="msg-other">
      <div className="user-info">
        <img src={data.author.photo} alt="profil pic" />
        <span>{data.author.name}</span>
      </div>

      <p className="msg-text">{data.text}</p>
    </div>
  );
};

export default Message;