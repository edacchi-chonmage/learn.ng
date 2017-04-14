export abstract class AbstractButtonComponent {
  public value: string | number;
  public abstract get label(): string;
  public abstract onClick(): void;
}