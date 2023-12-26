function getInvName() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  if (!urlParams.get("invname")) {
    invname = localStorage.getItem("invname");
  } else {
    invname = urlParams.get("invname");
    localStorage.setItem("invname", invname);
  }
  return invname;
}

function getName() {
  switch (invname) {
    case "Parents":
      return "Szüleink!";
    case "GrParents":
      return "Nagyszüleink!";
    case "VikiGabi":
      return "Viki és Gabi!";
    case "AndiSuni":
      return "Andi és Süni!";
    case "Vigyi":
      return "Vigyi!";
    case "TimkoRobi":
      return "Timkó, Robi, Levi és Zsombi!";
    case "KoriEdina":
      return "Edina, Köri, Máté és Bálint!";
    case "EsztiAndras":
      return "Eszti és András!";
    case "Adri":
      return "Adri!";
    case "Zsofi":
      return "Zsófi!";
    case "Anett":
      return "Anett!";
    case "PetraMatyi":
      return "Petra és Matyi!";
    case "ArpiAnna":
      return "Anna, Árpi és Lellebaba!";
    case "GeriBarbi":
      return "Barbi és Geri!";
    case "Misi":
      return "Misi!";
    case "Bence":
      return "Bence!";
    case "AdiVirag":
      return "Virág és Ádi!";
    case "OliKata":
      return "Kata és Olivér!";
    case "LaliSzabcsi":
      return "Szabcsi és Lali!";
    case "Marko":
      return "Márkó!";
    case "Beni":
      return "Beni!";
    case "GaborFanni":
      return "Fanni és Gábor!";
    default:
      return "Barátunk/Rokonunk!";
  }
}
