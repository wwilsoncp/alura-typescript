export abstract class View<T> {
  //
  protected element: HTMLElement;
  //
  constructor(selector: string) {
    const elemento = document.querySelector(selector);
    if (elemento) {
      this.element = elemento as HTMLElement;
    } else {
      throw new Error(`Seletor "${selector}" não existe no DOM. Verifique.`);
    }
  }

  protected abstract template(model: T): string;

  // @logTimeExecution(true)
  // @inspectMethod()
  public update(model: T): void {
    let template = this.template(model);
    this.element.innerHTML = template;
  }
}
