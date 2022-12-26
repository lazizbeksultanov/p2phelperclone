import React from "react";
import "./Pagination.scss";

const Pagination = (props) => {
  const handlePagination = (current) => {
    props.pagination(current);
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className={`page-link ${props.current === 1 ? "disabled" : props.current > 1 ? "" : ""
                }`}
              href="#"
              onClick={() => handlePagination(props.current - 1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </li>
          {props.total < 7 ? (
            <>
              {Array.apply(0, Array(props.total)).map((arr, i) => (
                  <li
                    key={i}
                    className={`page-item ${props.current === i + 1 ? "active" : ""
                      }`}
                  >
                    <button
                      className="page-link"
                      href="#"
                      onClick={() => handlePagination(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
              ))}
            </>
          ) : props.current % 5 >= 0 &&
            props.current > 4 &&
            props.current + 2 < props.total ? (
            <>
              <li className="page-item">
                <button
                  className="page-link"
                  href="#"
                  onClick={() => handlePagination(1)}
                >
                  1
                </button>
              </li>
              <li className="page-item">
                <button className="page-link disabled" href="#">
                  ...
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  href="#"
                  onClick={() => handlePagination(props.current - 1)}
                >
                  {props.current - 1}
                </button>
              </li>
              <li className="page-item active">
                <button
                  className="page-link"
                  href="#"
                  onClick={() => handlePagination(props.current)}
                >
                  {props.current}
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  href="#"
                  onClick={() => handlePagination(props.current + 1)}
                >
                  {props.current + 1}
                </button>
              </li>
              <li className="page-item">
                <button className="page-link disabled" href="#">
                  ...
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  href="#"
                  onClick={() => handlePagination(props.total)}
                >
                  {props.total}
                </button>
              </li>
            </>
          ) : props.current % 5 >= 0 &&
            props.current > 4 &&
            props.current + 2 >= props.total ? (
            <>
              <li className="page-item">
                <button
                  className="page-link"
                  href="#"
                  onClick={() => handlePagination(1)}
                >
                  1
                </button>
              </li>
              <li className="page-item">
                <button className="page-link disabled" href="#">
                  ...
                </button>
              </li>
              <li
                className={`page-item ${props.current === props.total - 3 ? "active" : ""
                  }`}
              >
                <button
                  className="page-link"
                  href="#"
                  onClick={() => handlePagination(props.total - 3)}
                >
                  {props.total - 3}
                </button>
              </li>
              <li
                className={`page-item ${props.current === props.total - 2 ? "active" : ""
                  }`}
              >
                <button
                  className="page-link"
                  href="#"
                  onClick={() => handlePagination(props.total - 2)}
                >
                  {props.total - 2}
                </button>
              </li>
              <li
                className={`page-item ${props.current === props.total - 1 ? "active" : ""
                  }`}
              >
                <button
                  className="page-link"
                  href="#"
                  onClick={() => handlePagination(props.total - 1)}
                >
                  {props.total - 1}
                </button>
              </li>
              <li
                className={`page-item ${props.current === props.total ? "active" : ""
                  }`}
              >
                <button
                  className="page-link"
                  href="#"
                  onClick={() => handlePagination(props.total)}
                >
                  {props.total}
                </button>
              </li>
            </>
          ) : (
            <>
              {Array.apply(0, Array(5)).map((arr, i) => (
                <React.Fragment key={i}>
                  <li
                    className={`page-item ${props.current === i + 1 ? "active" : ""
                      }`}
                  >
                    <button
                      className="page-link"
                      href="#"
                      onClick={() => handlePagination(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                </React.Fragment>
              ))}
              <li className="page-item">
                <button className="page-link disabled" href="#">
                  ...
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  href="#"
                  onClick={() => handlePagination(props.total)}
                >
                  {props.total}
                </button>
              </li>
            </>
          )}
          <li className="page-item">
            <button
              className={`page-link ${props.current === props.total
                ? "disabled"
                : props.current < props.total
                  ? ""
                  : ""
                }`}
              href="#"
              onClick={() => handlePagination(props.current + 1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
