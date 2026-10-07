import styles from './FilterBar.module.css';

type FilterBarProps = {
  label: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

export function FilterBar({ label, options, selected, onChange }: FilterBarProps) {
  return (
    <div className={styles['filter-bar']}>
      <div className="container">
        <span className={styles['filter-label']}>{label}</span>
        <div className={styles['filter-buttons']}>
          {['All', ...options].map((option) => (
            <button
              key={option}
              className={`${styles['filter-btn']} ${selected === option ? styles.active : ''}`}
              onClick={() => onChange(option)}
              aria-pressed={selected === option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
