import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { builder, sanityClient } from "../utils/sanity/client";
import { PortableTextComponents } from "@portabletext/react";

export const RichTextComponent: PortableTextComponents = {
  list: (props: any) => {
    const ListTag = props.value.listItem === "number" ? "ol" : "ul";
    return (
      <ListTag
        className={`${
          props.value.listItem === "number" ? "list-decimal" : "list-disc"
        } pl-4`}
      >
        {props.children}
      </ListTag>
    );
  },
  listItem: (props: any) => {
    return (
      <div className='py-3'>
        <li className='text-lg font-bold'>{props.value.children[0].text}</li>

        <p className='text-lg'>{props.value.children[1].text}</p>
      </div>
    );
  },
  marks: {
    link: (props: any) => {
      return <p className='text-xl'>asdsad</p>;
    },
  },

  block: (props: any) => {
    if (
      props.value.style === "h3" ||
      props.value.style === "h2" ||
      props.value.style === "h1" ||
      props.value.style === "h4" ||
      props.value.style === "h5" ||
      props.value.style === "h6"
    ) {
      return (
        <div className='py-7'>
          <h3 className='text-2xl font-semibold'>
            {props.value.children[0].text}
          </h3>
        </div>
      );
    }

    if (props.value.style === "normal") {
      return <p className='text-lg'>{props.value.children[0].text}</p>;
    }
  },
  types: {
    image: (props: any) => {
      return (
        <div className='py-2 '>
          <Image
            height={300}
            width={300}
            src={builder
              .image(props.value.asset._ref)
              .width(300)
              .height(300)
              .url()}
            alt='images'
            loading='lazy'
          />
        </div>
      );
    },
  },
};
