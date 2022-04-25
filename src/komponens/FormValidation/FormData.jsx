export const ListForm = [
    {
      index: 1,
      type: "email",
      name: "email",
      placeholder: "Example :Name@example.com",
      label: "Email Address",
    },
    {
      index: 2,
      type: "text",
      name: "username",
      placeholder: "Example : BudiSantoso",
      label: "Username",
    },
    {
      index: 3,
      type: "number",
      name: "no_hp",
      placeholder: "Example : 087734635840",
      label: "No Handphone",
    },
    {
      index: 4,
      type: "text",
      name: "alamat",
      placeholder: "Example : Jalan Sungai Raya Dalam",
      label: "Alamat",
    },
  ];
   export const onSubmit = (data) => {
    console.log(data);
    alert("Anda Berhasil Register Akun");
  };