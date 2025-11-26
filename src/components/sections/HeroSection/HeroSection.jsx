import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            {/* O Background será tratado pelo CSS */}

            <div className={styles.content}>
                {/* Título Principal em Neon */}
                <h1 className={styles.title}>FUTURE IS NOW</h1>

                {/* Descrição */}
                <p className={styles.description}>
                    Streetwear que conecta o <span className={styles.neonHighlight}>futuro distópico</span> com
                    a melhor qualidade do mercado
                </p>

                {/* Botões de Ação */}
                <div className={styles.actions}>
                    {/* Botão Primário (Roxo Sólido) */}
                    {/* Usaríamos <Button variant="primary">... se tivéssemos o componente */}
                    <button className={`${styles.btn} ${styles.btnPrimary}`}>
                        Compre AGORA
                    </button>

                    {/* Botão Secundário (Borda) */}
                    <button className={`${styles.btn} ${styles.btnSecondary}`}>
                        ENTRAR NA DYSTOPIA
                    </button>
                </div>

                {/* Barra de Informação Inferior (Drops, Qualidade, Autêntico) */}
                <div className={styles.infoBar}>
                    <p><span className={styles.dropPoint}></span> DROPS LIMITADOS</p>
                    <p><span className={styles.qualityPoint}></span> QUALIDADE PREMIUM</p>
                    <p><span className={styles.authenticPoint}></span> AUTÊNTICO</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;