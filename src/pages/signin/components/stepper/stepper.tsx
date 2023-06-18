import style from "./stepper.module.scss"

const Stepper = ({ step }: { step: number }) => {
  return (
    <div className={style.stepper} data-width={step * 33} data-step={`${step+1} / 3`}>
        { [0, 1, 2].map((i) => <div className={`${style.step} ${step >= i ? style.active : ''}`}></div>) }
    </div>
  );
};

export default Stepper;
