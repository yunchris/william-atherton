import MainLayout from "../layout/";
import styles from '../styles/bio.module.css'

export default function Bio() {
  return (
    <MainLayout title="William Atherton Bio" description="William Atherton Bio">
      <div className={styles.bioContainer}>
        <div className={styles.bioGraphicContainer}>
          <div className={styles.bioTitle}>BIO</div>
          <img src="/bgBio.png" className={styles.image} />
        </div>
        <div className={styles.bioCopy}>
          William Atherton’s career has spanned motion pictures, Broadway and
          television. He first achieved international recognition as the lead in
          Steven Spielberg’s debut feature The Sugarland Express and next
          starred in John Schlesinger’s The Day of the Locust, Robert Wise’s The
          Hindenburg and Richard Brooks’ Looking For Mr. Goodbar. He is known
          worldwide for what have become his signature film characters: the TV
          reporter, Dick Thornburg in Die Hard I and 2; the EPA official, Walter
          Peck in Ghostbusters; Professor Hathaway in Real Genius and the mad
          scientist, Dr. Faulkner in Bio-Dome. Among his more than 30 feature
          films are co-starring roles in John Landis’s Oscar, Bill Duke’s
          Hoodlum, Richard Pearce’s No Mercy, Alan J. Pakula’s The Pelican
          Brief, Costa Gravas’ Mad City and Ed Zwick’s The Last Samurai. On
          television, he has starred in several mini-series including the
          classic western Centennial. His many made-for-TV movies include TNT’s
          production of Joan Didion’s Broken Trust and his portrayal of Darryl
          F. Zanuck in HBO’s Golden Globe winner Introducing Dorothy Dandridge.
          Atherton was recently a recurring series lead on NBC-TV’s Life and
          portrayed Principal Reynolds in the last season of Lost. Atherton has
          originated roles on and off Broadway for many of America’s leading
          playwrights. These include the title character in Joe Papp’s
          production of David Rabe’s The Basic Training of Pavlo Hummel, the
          role of Ronnie in John Guare’s The House of Blue Leaves and Bing Ring
          Ling in his Rich and Famous. He starred in the Broadway premiere of
          Arthur Miller’s The American Clock and the Tony-winning revival of
          Herman Wouk’s The Caine Mutiny Court Martial. Among his more than
          twenty well-known productions are the New York premieres of Franz
          Kafka’s The Castle and Kressman Taylor’s Address Unknown. For his work
          on the stage he has received the Drama Desk Award, the Outer Circle
          Critics Award, the Theatre World Award and nominations for an Obie and
          Chicago’s Joseph Jefferson Award. Recent work includes Clinical, a
          thriller on Netflix; the recurring character, Viceroy Mercado in the
          SyFy Channel’s hit TV series, Defiance; and four documentaries on his
          most iconic films, Ghostbusters and Die Hard.
        </div>
      </div>
    </MainLayout>
  );
}
