package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.entities.Seller;

import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class SellerDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;

    public SellerDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public SellerDTO(Seller entity) {
        this.id = entity.getId();
        this.name = entity.getName();
    }

    public SellerDTO(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
