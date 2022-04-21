export abstract class View<T> {
  //
  protected element: HTMLElement;
  private escapar = false;
  //
  constructor(selector: string, escapar?: boolean) {
    const elemento = document.querySelector(selector);
    if (elemento) {
      this.element = elemento as HTMLElement;
    } else {
      throw new Error(`Seletor "${selector}" não existe no DOM. Verifique.`);
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.element.innerHTML = template;
  }
}
