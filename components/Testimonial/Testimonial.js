import Testimonials from "./Testimonials";

const styles = {
    section: 'py-4 grow lg:pt-2 lg:pb-16 w-full flex items-center flex-col',
    header: 'text-header font-bold py-12 text-[#313131]',
    p: "py-10 text-center text-lg font-normal text-[#575757] w-[756px]",

}

const Testimonial = () => {
  return (
    <section className={styles.section}>
            <h1 className={styles.header}>Testimonials</h1>
            <p className={styles.p}>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
            <Testimonials />
    </section>
    );
};

export default Testimonial
