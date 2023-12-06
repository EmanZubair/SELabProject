import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOneRowComponent } from './product-one-row.component';

describe('ProductOneRowComponent', () => {
  let component: ProductOneRowComponent;
  let fixture: ComponentFixture<ProductOneRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOneRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductOneRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
