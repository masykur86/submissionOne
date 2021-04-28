class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.name = this.getAttribute('name') || null
    this.pictureUrl = this.getAttribute('picture') || null
    this.location = this.getAttribute('location') || null
    this.rating = this.getAttribute('rating') || null
    this.description = this.getAttribute('description') || null

    this.innerHTML = `
            <article class="restaurant__item">
                <img class="restaurant__item__thumbnail" alt="${this.name}" src="${this.pictureUrl}" >
                <div class="restaurant__item__location">
                <i class="fas fa-map-marker-alt">   ${this.location}</i>
                   
                </div>
                <div class="restaurant__item__data">
                    <h1 class="restaurant__item__name">
                        <a href="#">${this.name}</a>
                    </h1>
                    <div class="restaurant__item__rating">
                    Rating:                   
                        ${this.rating} <i class="fas fa-star"></i>
                    </div>
                    <p class="restaurant__item__description">
                        ${this.description} 
                    </p>
                </div>
            </article>
        `
  }
}

customElements.define('restaurant-list', RestaurantItem)
