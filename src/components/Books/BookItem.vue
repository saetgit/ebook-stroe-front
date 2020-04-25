<template>
  <div class="ms-item-01 show col-md-3 col-sm-3 col-xs-3" data-val="1">
    <article :class="'entry-item ct-item-1 ' + book.colorClass">
      <div class="entry-thumb">
        <a href="#">
          <img :src="book.img" alt />
        </a>
        <div class="entry-content">
          <header>
            <h4 class="entry-title">
              <a href="#">{{book.title}}</a>
            </h4>
            <div class="kopa-rating">
              <ul>
                <li v-for="(star,j) in book.rate" :key="'start'+j">
                  <span class="fa fa-star"></span>
                </li>

                <li v-for="(star,index) in 5-book.rate" :key="index" class="inactive">
                  <span class="fa fa-star"></span>
                </li>
              </ul>
            </div>
          </header>
          <p>{{book.description}}</p>
          <p class="ct-space-1"></p>
          <div class="ct-icon-1">
            <p>
              <span>$</span>{{book.discount}}
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div class="ft-wrap style-01">
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-user"></i>
                by {{book.auther}}
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-folder-o"></i>
                {{book.category}}
              </a>
            </li>
          </ul>
        </div>
        <div class="ft-wrap style-02">
          <ul>
            <li>
              <div class="add-to-wishlist">
                <div>
                  <a href="#" class="add_to_wishlist">
                    <i class="ti-heart"></i>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a href="#">
                <i class="ti-shopping-cart"></i>
              </a>
            </li>
            <li>
              <a href="#" target="blank">
                <i class="ti-new-window"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </article>
    <div class="badge-icon-1 style-02" v-if="book.type === 'HOT'">
      HOT
      <span></span>
    </div>
    <div class="badge-icon-1 style-01" v-else-if="book.type === 'NEW'">
      NEW
      <span></span>
    </div>
    <div class="badge-icon-1 style-03" v-else-if="book.type === 'SOLD'">
      SOLD
      <span></span>
    </div>
  </div>
  <!-- masonry-item -->
</template>
<script>
export default {
  name: "book-component",

  props: {
    book: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
 