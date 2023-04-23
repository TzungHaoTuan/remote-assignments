import FirstContent from "./FirstContent"
import SecondaryContent from "./SecondaryContent"
export default function Section() {
    return (
        <section class="main-section">
            <h2 class="section-title">Section Title</h2>
            <FirstContent />
            <SecondaryContent />
        </section>
    )
}