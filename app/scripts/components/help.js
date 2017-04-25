{
  this.props.bands.map((band, i) => {
    <div>
      return (
      <div>
        <div>
          <Col m={6} s={12}>
            <Card
              className="small"
              header={<CardTitle image={band.images[1]}>{band.name}</CardTitle>}
              actions={[
                <div>
                  <a href="#">Vote for this Artist</a>
                  {" "}
                  <Button
                    onClick={this.clickHandler}
                    floating
                    large
                    className="search-btn"
                    waves="light"
                    icon="thumb_up"
                  />
                </div>
              ]}
            />
          </Col>
        </div>
      </div>
      );
    </div>;
  });
}
